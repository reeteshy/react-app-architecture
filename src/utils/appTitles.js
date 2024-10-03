const titleMap = {
    "/": "Sign In",
    "/dashboard": "Dashboard",
    "/sign-in": "Sign In",
    "/sign-up": "Sign Up",
    "/my-profile": "User Profile",
    "/regulater": "Regulater",
    "/operater": "Operater",
    "/sub-admin": "Sub Admin",
    "/users": "Users",
    "/forget-password": "Forget Password",
    "/recover-password": "Recover Password",
  };
  /**
   * Returns the title of a page based on its route path.
   * @param {string} path - The path of the page route.
   * @returns {string} The title of the page with the site name appended.
   */
  export const getTitleFromRoute = (path) => {
    if (titleMap[path]) {
      return `${titleMap[path]} | eMSC`;
    }
  
    const userProfileRegex = /^\/user\/(\w+)$/;
    const postRegex = /^\/(my\/)?post\/(\w+)$/;
    const communityRegex =
      /^\/community\/(\w+)(\/report|\/reported-post|\/moderator)?$/;
  
    if (userProfileRegex.test(path)) {
      return "User Profile | eMSC";
    } else if (postRegex.test(path)) {
      return "Post | eMSC";
    } else if (communityRegex.test(path)) {
      return "Community | eMSC";
    }
  
    return "eMSC";
  };
  