class User {
  /**
   * The user id's
   * 
   * @var {string|null}
   * @public
   */
  public id: number | null;

  /**
   * The user email's
   * 
   * @var {string|null}
   * @public
   */
  public email: string| null;

  /**
   * The user name's
   * 
   * @var {string|null}
   * @public
   */
  public name: string | null;

  /**
   * Create a new instance of this class
   * 
   * @returns {void}
   */
  constructor () {
    this.id = null;
    this.email = null;
    this.name = null;
  }
}

export default User;
