export default {
  // Describe the project's name
  name: process.env.REACT_APP_NAME,
  
  // Describe the page title
  title: process.env.REACT_APP_TITLE,
  
  // PUBLIC API to get users and robot images data
  api: {
    users: process.env.REACT_APP_API_USERS,
    robots: process.env.REACT_APP_API_ROBO_IMG
  }
}
