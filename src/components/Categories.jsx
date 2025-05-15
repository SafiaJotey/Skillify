import React from 'react'

export default function Categories() {
    const categories = [
        { id: 1, name: 'Web Development', courseCount: 42 },
        { id: 2, name: 'Data Science', courseCount: 28 },
        { id: 3, name: 'Mobile Development', courseCount: 35 },
        { id: 4, name: 'UI/UX Design', courseCount: 19 },
        { id: 5, name: 'Cloud Computing', courseCount: 31 },
        { id: 6, name: 'DevOps', courseCount: 23 },
      ];
  return (
    <section className="py-12 bg-neutral-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-neutral-800 mb-8">Browse Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <svg 
                    className="w-6 h-6 text-primary-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800">{category.name}</h3>
              </div>
              <p className="text-neutral-500 mb-4">Explore {category.courseCount} courses in this category</p>
              <button aria-label='view Courses' className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-300">
                View Courses
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button aria-label='view Categories' className="px-6 py-3 border-2 border-primary-500 text-primary-500 font-medium rounded-md hover:bg-primary-50 transition-colors duration-300">
          View All Categories
        </button>
      </div>
    </div>
  </section>
  )
}
