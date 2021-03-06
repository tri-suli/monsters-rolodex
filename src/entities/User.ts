class User {
  /**
   * The user id's
   * 
   * @var {string}
   * @public
   */
  public id: number;

  /**
   * The user email's
   * 
   * @var {string}
   * @public
   */
  public email: string;

  /**
   * The user name's
   * 
   * @var {string}
   * @public
   */
  public name: string;

  /**
   * Create a new instance of this class
   * 
   * @returns {void}
   */
  constructor () {
    this.id = 0;
    this.email = '';
    this.name = '';
  }

  /**
   * Get the list of users that already filterized
   * by some keywords.
   * 
   * @param {string} keyword
   * @param {Array<User>} users
   */
  public static filter (keyword: string, users: Array<User>): Array<User> {
    return users.filter((user: User) => user.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }
}

export default User;
