import api from "./index";
import {AxiosResponse} from "axios";
import {IHotel} from "../types/IHotel";

export default class HotelsHttp {
    static fetchHotels(): Promise<AxiosResponse<IHotel[]>> {
        return api.get<IHotel[]>(`/hotels/collection`)
    }

    static fetchTargetHotel(id: string): Promise<AxiosResponse<IHotel>> {
        return api.get<IHotel>(`/hotels/${id}`)
    }
}