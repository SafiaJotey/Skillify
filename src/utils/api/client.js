
const API_BASE_URL = '';

class ApiClient {
  /**
   * Make a GET request
   * @param {string} url - The endpoint to fetch from
   * @param {Object} options - Additional fetch options
   * @returns {Promise} - Response data
   */
  async get(url, options = {}) {
    return this.request(url, { 
      method: 'GET', 
      ...options 
    });
  }

  /**
   * Make a POST request
   * @param {string} url - The endpoint to fetch from
   * @param {Object} data - The data to send
   * @param {Object} options - Additional fetch options
   * @returns {Promise} - Response data
   */
  async post(url, data, options = {}) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    });
  }

  /**
   * Make a PUT request
   * @param {string} url - The endpoint to fetch from
   * @param {Object} data - The data to send
   * @param {Object} options - Additional fetch options
   * @returns {Promise} - Response data
   */
  async put(url, data, options = {}) {
    return this.request(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options
    });
  }

  /**
   * Make a PATCH request
   * @param {string} url - The endpoint to fetch from
   * @param {Object} data - The data to send
   * @param {Object} options - Additional fetch options
   * @returns {Promise} - Response data
   */
  async patch(url, data, options = {}) {
    return this.request(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options
    });
  }

  /**
   * Make a DELETE request
   * @param {string} url - The endpoint to fetch from
   * @param {Object} options - Additional fetch options
   * @returns {Promise} - Response data
   */
  async delete(url, options = {}) {
    return this.request(url, {
      method: 'DELETE',
      ...options
    });
  }

  /**
   * Base request method that all other methods use
   * @param {string} url - The endpoint to fetch from
   * @param {Object} options - Fetch options
   * @returns {Promise} - Response data
   */
  async request(url, options = {}) {
    // Merge default headers with provided headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
        credentials: 'include', // For handling cookies, if needed
      });

      // Check if the request was successful
      if (!response.ok) {
        // Try to parse error message from response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API error: ${response.status}`);
      }

      // Check if response is empty
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return await response.text();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
const client = new ApiClient();
export default client;