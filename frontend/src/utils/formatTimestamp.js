import moment from "moment";

export const convertFormTimeStamp = (timestamp) => {
    return moment(timestamp).format('LLLL');
}