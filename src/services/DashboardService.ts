import { DashboardItemsModel, AppointmentModel, EarningModel, EarnListModel } from "../models";
import { doctorsList, campaignList, departmentList } from "../datas";
import moment from "moment";

export const globalAppointmentDate = moment(new Date())
  .add(7, "days")
  .hour(14)
  .minute(30)
  .toDate();

export const globalAppointment: AppointmentModel = {
  title: "Upcoming appoinment",
  doctor: {
    fullName: "Stephan",
    about: "About",
    title: "Doctor",
    imageUrl:
      "https://raw.githubusercontent.com/publsoft/publsoft.github.io/master/projects/dentist-demo/assets/images/profile_photo.png",
    isOnline: true,
    rating: 5,
    reviews: [],
    profile: "Youvize Redesign Consulting project manage expert.",
    skills: [
      "Figma",
      "Sketch",
      "UI Design",
      "UX Design",
    ],
    time: "3:30 - 4:30pm",
    date: "Jul 20",
  },
  appointmentDate: globalAppointmentDate,
  locationName: "Central Hospital"
};

export const earnList: EarnListModel[] = [
  {
    date: "Jul 25",
    bookTime: "2:00pm",
    clientName: "Deadpool",
    minutes: 45,
    earned: 90,
  },
  {
    date: "Jul 30",
    bookTime: "12:00pm",
    clientName: "Xavier",
    minutes: 45,
    earned: 59.40,
  }
];

export const earnings: EarningModel = {
  date: "This Week",
  minutes: 60,
  hourly: 2.49,
  earnlist: earnList
}

export default class DashboardService {
  public static getDashboardItems(): Promise<DashboardItemsModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const model: DashboardItemsModel = {
          appointment: globalAppointment,
          campaigns: campaignList,
          doctors: doctorsList,
          departments: departmentList,

        };
        resolve(model);
      }, 100);
    });
  }
}
