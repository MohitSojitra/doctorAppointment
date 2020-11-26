import { Event } from "../../schemas/Event";
import { User } from "../../schemas/User";

class EventRepository {
  private static instance: EventRepository;

  /**
   * Register Event
   * @param tags
   * @param date
   * @param name
   * @param mapLag
   * @param mapLat
   */
  public async registerEvent(
    name: string,
    category: string,
    gender: string,
    description: string,
    address: string,
    capicity: Int16Array,
    date: string,
    tags: any,
    mapLat: string,
    mapLag: string,
    userId: any,
  ) {
    // console.log({ tags, date, name, mapLag, mapLat });
    const newEvent = new Event({
      name,
      category,
      gender,
      description,
      address,
      capicity,
      date,
      tags,
      mapLat,
      mapLag,
      userId,
    });
    const saveEvent = await newEvent.save();
    // console.log({ saveEvent });
    if (!!!saveEvent) {
      throw new Error("event nor refister please try again later!!");
    }
    const user = await User.findById(userId);
    if (!!!user) {
      throw new Error("user not found!");
    }
    user.events.push(saveEvent._id);

    try {
      await user.save();
    } catch (e) {
      throw new Error("dont save in user !");
    }
    return true;
  }

  /**
   * getAll events of perticular user
   * @param userId
   */
  public async getAllEventByUserId(userId: any) {
    const user = await User.findById(userId);
    if (!!!user) {
      throw new Error("user not found!");
    }
    console.log({ user });

    const events = await Promise.all(
      user.events.map(async (e) => await Event.findById(e)),
    );

    // console.log(events);

    return events;
  }

  /**
   * update Event
   * @param eventId
   * @param tags
   * @param date
   * @param name
   * @param mapLag
   * @param mapLat
   */
  public async updateEvent(
    eventId: any,
    name: string,
    category: string,
    gender: string,
    description: string,
    address: string,
    capicity: Int16Array,
    date: string,
    tags: any,
    mapLat: string,
    mapLag: string,
  ) {
    let updatedItem = {};
    if (!!tags) {
      updatedItem = { ...updatedItem, tags };
    }
    if (!!date) {
      updatedItem = { ...updatedItem, date };
    }
    if (!!name) {
      updatedItem = { ...updatedItem, name };
    }
    if (!!mapLag) {
      updatedItem = { ...updatedItem, mapLag };
    }
    if (!!mapLat) {
      updatedItem = { ...updatedItem, mapLat };
    }
    if (!!category) {
      updatedItem = { ...updatedItem, category };
    }
    if (!!gender) {
      updatedItem = { ...updatedItem, gender };
    }
    if (!!description) {
      updatedItem = { ...updatedItem, description };
    }
    if (!!address) {
      updatedItem = { ...updatedItem, address };
    }
    if (!!capicity) {
      updatedItem = { ...updatedItem, capicity };
    }

    try {
      const newUpdatedItem = await Event.findByIdAndUpdate(
        eventId,
        updatedItem,
        { new: true },
      );
      console.log(newUpdatedItem);
    } catch (e) {
      throw new Error(e);
    }

    return true;
  }
  public async deleteEvent(eventId: any) {
    try {
      await Event.findByIdAndRemove(eventId);
    } catch (e) {
      throw new Error(e);
    }
    return true;
  }

  public async getEventById(eventId: string) {
    const event = await Event.findById(eventId);
    if (!!!event) {
      throw new Error("event not found !!!");
    }
    return event;
  }

  /**
   * get singlton object
   */
  public static getInstance() {
    if (!EventRepository.instance) {
      EventRepository.instance = new EventRepository();
    }
    return EventRepository.instance;
  }
}

export { EventRepository };
