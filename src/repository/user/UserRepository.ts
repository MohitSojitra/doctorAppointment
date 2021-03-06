import { objectIdToCursor } from "../../common/common.graphQlPagination";
import { Doctor } from "../../schemas/Doctor/doctor.model";
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
  public async registerUser(
    email: string,
    password: string,
    name: string,
    mobile: string,
    age: string,
    gender: string,
  ) {
    //   const user = await User.create({name , email , password})
    const emailExist = await User.findOne({ email: email });
    if (!!emailExist) {
      throw new Error("Email already exist");
    }
    const mobileExist = await User.findOne({ mobile: mobile });
    if (!!mobileExist) {
      throw new Error("mobile number already exist");
    }

    const user = new User({ email, password, name, mobile, age, gender });
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

  /**
   * login user
   * @param email
   * @param password
   * @returns
   */
  public async loginUser(email: string, password: string) {
    const user = await User.findOne({ email, password });
    if (!!user) {
      const token = await JWTRepository.getInstance().generateToken(user._id);
      return { token };
    } else {
      throw new Error("InValid Credential !!");
    }
  }

  public async bookApointment(
    problem: string,
    slot: string,
    doctorId: string,
    userId: string,
  ) {
    try {
      let doctorExist = await Doctor.findById(doctorId);

      if (!!!doctorExist) {
        throw new Error("doctor dosent exist in data base");
      } else {
        let workingTime = doctorExist.workingTime.split("-");
        // 0 = startDay 1= endDay 2=startTime 3=endTime

        // check patient enter day is under the doctor default time Like mon-fri
        if (
          parseInt(workingTime[0]) <= parseInt(slot.split("-")[0]) &&
          parseInt(workingTime[1]) >= parseInt(slot.split("-")[0])
        ) {
          // check slot is available or not

          // if no slot found in doctor then direct insert
          if (doctorExist.slotes.length <= 0) {
            doctorExist?.slotes.push({
              time: slot,
              problem: problem,
              userId: userId,
            });
            let savedTime = await doctorExist?.save();
            if (!!savedTime) {
              return { success: true };
            } else {
              throw new Error("dosent assign slot");
            }
          } else {
            // if found then check wheter that slot allocate or not
            try {
              let x = await Promise.all(
                await doctorExist.slotes.map(async (filteredSlot) => {
                  if (!!filteredSlot) {
                    let filteredSlotSTime = parseFloat(
                      filteredSlot.time.split("-")[1],
                    );
                    let filteredSlotETime = parseFloat(
                      filteredSlot.time.split("-")[2],
                    );

                    let slotSTime = parseFloat(slot.split("-")[1]);
                    let slotETime = parseFloat(slot.split("-")[2]);

                    console.log({
                      filteredSlotSTime,
                      filteredSlotETime,
                      slotSTime,
                      slotETime,
                    });

                    if (
                      (slotSTime > filteredSlotSTime &&
                        slotSTime < filteredSlotETime) ||
                      (slotETime > filteredSlotSTime &&
                        slotETime < filteredSlotETime)
                    ) {
                      console.log({ doctorExist });
                      //conflict
                      throw new Error("slot conflict occure");
                    }
                  } else {
                    throw new Error("slot conflict occure");
                  }
                }),
              );

              if (!!x) {
                let obj = {
                  time: slot,
                  userId: userId,
                  problem: problem,
                };
                doctorExist?.slotes.push(obj);
                let savedTime = await doctorExist?.save();
                if (!!savedTime) {
                  return { success: true };
                } else {
                  throw new Error("dosent assign slot");
                }
              } else {
                throw new Error("error occured");
              }
            } catch (e) {
              throw new Error(e);
            }
          }
        } else {
          throw new Error("doctor not available at this time");
        }
      }
    } catch (e) {
      throw new Error(e);
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
