import {
  argsToWhereCond,
  cursorToobjectId,
} from "../../common/common.graphQlPagination";
import { Doctor } from "../../schemas/Doctor/doctor.model";
import { Event } from "../../schemas/Event";
import { User } from "../../schemas/User";

class DoctorRepository {
  private static instance: DoctorRepository;

  /**
   * it is for adding doctor in database
   * @param param0 {name,
    specialization,
    curruntServingHospital,
    experience,
    bio,
    workingTime, }
   * @returns 
   */
  public async addDoctor({
    name,
    specialization,
    curruntServingHospital,
    experience,
    bio,
    workingTime,
  }: any) {
    console.log({
      name,
      specialization,
      curruntServingHospital,
      experience,
      bio,
      workingTime,
    });

    try {
      let doctor = new Doctor({
        name: name,
        specialization,
        curruntServingHospital,
        experience,
        bio,
        workingTime,
      });

      let savedDoctor = await doctor.save();
      if (!!!savedDoctor) {
        throw new Error("doctor dosent saved in database");
      } else {
        return { success: true };
      }
    } catch (e) {
      throw new Error("doctor adding fail");
    }
  }

  /**
   * edit doctor
   * @param param0
   * @returns
   */
  public async editDoctor({
    id,
    name,
    specialization,
    curruntServingHospital,
    experience,
    bio,
    workingTime,
  }: any) {
    try {
      // check doctor if exist
      let existDoctor = await Doctor.findById(id);
      if (!!!existDoctor) {
        //if not exist
        throw new Error("doctor dosent present in database");
      } else {
        // if exist

        let updateFeild = {};

        if (!!name) {
          updateFeild = { ...updateFeild, name };
        }
        if (!!specialization) {
          updateFeild = { ...updateFeild, specialization };
        }
        if (!!curruntServingHospital) {
          updateFeild = { ...updateFeild, curruntServingHospital };
        }
        if (!!experience) {
          updateFeild = { ...updateFeild, experience };
        }
        if (!!bio) {
          updateFeild = { ...updateFeild, bio };
        }
        if (!!workingTime) {
          updateFeild = { ...updateFeild, workingTime };
        }

        const updatedDoctor = await Doctor.findByIdAndUpdate(
          id,
          { $set: { ...updateFeild } },
          { new: true },
        );

        if (!!!updatedDoctor) {
          throw new Error("doctor dosent updated");
        } else {
          console.log({ updatedDoctor });
          return { success: true };
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * delete doctor
   * @param param0
   * @returns
   */
  public async deleteDoctor({ id }: any) {
    try {
      // check doctor if exist
      let existDoctor = await Doctor.findById(id);
      if (!!!existDoctor) {
        //if not exist
        throw new Error("doctor dosent present in database");
      } else {
        // if exist

        const deletedDoctor = await Doctor.findByIdAndRemove(id);

        if (!!!deletedDoctor) {
          throw new Error("doctor dosent deleted");
        } else {
          console.log({ deletedDoctor });
          return { success: true };
        }
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  public async getAllDoctors(args: any) {
    try {
      const { where, limit, orderBy } = argsToWhereCond(args);

      const doctors = await Doctor.find({}).limit(limit).sort(orderBy);
      console.log({ doctors });

      return doctors;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * filter by name
   * @param name
   * @returns
   */
  public async findDoctorByName(name: string) {
    try {
      const doctor = await Doctor.aggregate([{ $match: { name: name } }]);
      console.log(doctor);
      if (!!doctor) return { doctor };
      else throw new Error("doctor not found");
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * filter by the specialization
   * @param specialization
   * @returns
   */
  public async findDoctorBySpacialization(specialization: string) {
    try {
      const doctor = await Doctor.aggregate([
        {
          $unwind: {
            path: "$specialization",
          },
        },
        {
          $match: {
            specialization: specialization,
          },
        },
      ]);
      console.log(doctor);
      if (!!doctor) return { doctor };
      else throw new Error("doctor not found");
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
   * get singlton object
   */
  public static getInstance() {
    if (!DoctorRepository.instance) {
      DoctorRepository.instance = new DoctorRepository();
    }
    return DoctorRepository.instance;
  }
}

export { DoctorRepository };
