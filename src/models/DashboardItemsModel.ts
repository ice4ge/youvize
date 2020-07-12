import { DoctorModel } from "./DoctorModel";
import { AppointmentModel } from "./AppointmentModel";
import { CampaignModel } from "./CampaignModel";
import { DepartmentModel } from "./DepartmentModel";

export type DashboardItemsModel = {
  appointment: AppointmentModel;
  campaigns: CampaignModel[];
  doctors: DoctorModel[];
  departments: DepartmentModel[];
  earning?: EarningModel;
};

export type EarningModel = {
  date: string,
  minutes: number,
  hourly: number,
  earnlist?:EarnListModel[],
}

export type EarnListModel = {
  date: string,
  bookTime: string,
  clientName: string,
  minutes: number,
  earned: number,
}
