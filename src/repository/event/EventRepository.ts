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
    tags: any,
    date: any,
    name: any,
    mapLag: any,
    mapLat: any,
    userId: any,
  ) {
    // console.log({ tags, date, name, mapLag, mapLat });
    const newEvent = new Event({ tags, date, name, mapLag, mapLat, userId });
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
    tags: any,
    date: any,
    name: any,
    mapLag: any,
    mapLat: any,
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
