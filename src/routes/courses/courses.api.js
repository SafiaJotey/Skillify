import { client, ROUTES } from "../../utils/api";



export const courseService = {

  getAllCourses: async () => {
    try {

return await client.get(ROUTES.JSON_FILES.COURSES);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      throw error;
    }
  },

  /**
   * Get a specific course by ID
   * @param {string|number} id - Course ID to find
   * @returns {Promise} - Course data or null if not found
   */
  getCourseById: async (id) => {
    try {
      const courses = await client.get(ROUTES.JSON_FILES.COURSES);
      return courses.find(course => course.id === id || course.id === Number(id)) || null;
    } catch (error) {
      console.error(`Failed to fetch course with ID ${id}:`, error);
      throw error;
    }
  },
  
  /**
   * Filter courses by specific criteria
   * @param {Object} filters - Filter criteria
   * @returns {Promise} - Filtered courses
   */
  filterCourses: async (filters = {}) => {
    try {
      const courses = await client.get(ROUTES.JSON_FILES.COURSES);
      
      return courses.filter(course => {
        // Apply all filters
        return Object.entries(filters).every(([key, value]) => {
          // Handle different types of filters
          if (Array.isArray(value)) {
            return value.includes(course[key]);
          } else if (typeof value === 'string') {
            return course[key].toLowerCase().includes(value.toLowerCase());
          }
          return course[key] === value;
        });
      });
    } catch (error) {
      console.error('Failed to filter courses:', error);
      throw error;
    }
  },
  
  /**
   * Search courses by keyword in title and description
   * @param {string} keyword - Search term
   * @returns {Promise} - Search results
   */
  searchCourses: async (keyword) => {
    if (!keyword) return [];
    
    try {
      const courses = await client.get(ROUTES.JSON_FILES.COURSES);
      const searchTerm = keyword.toLowerCase();
      
      return courses.filter(course => 
        course.title?.toLowerCase().includes(searchTerm) || 
        course.description?.toLowerCase().includes(searchTerm)
      );
    } catch (error) {
      console.error(`Failed to search courses for "${keyword}":`, error);
      throw error;
    }
  }
};