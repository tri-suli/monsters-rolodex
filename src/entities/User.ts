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
}

export default User;
