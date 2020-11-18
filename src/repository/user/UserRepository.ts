import { User } from "../../schemas/User";
import { JWTRepository } from "../jwt/JWTRepository";

class UserRepository {
  private static instance: UserRepository;

  /**
   *
   * @param userId get any user by ites id
   */
  public async getUserById(userId: String) {
    return await User.findById(userId);
  }

  /**
   * Register USer
   * @param email
   * @param password
   * @param name
   */
  public async registerUser(email: string, password: string, name: string) {
    //   const user = await User.create({name , email , password})
    const emailExist = await User.findOne({ email: email });
    if (!!emailExist) {
      throw new Error("Email already exist");
    }

    const user = new User({ email, password, name });
    const savedUser = await user.save();
    if (savedUser) {
      const token = await JWTRepository.getInstance().generateToken(
        savedUser._id,
      );
      return { token };
    } else {
      throw new Error("Register fail");
    }
  }

  public static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }
}

export { UserRepository };
