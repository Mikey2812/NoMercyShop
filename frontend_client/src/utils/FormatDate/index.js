import moment from "moment";

export const formatToMonthDayYear = (timestamp) => {
    return moment(timestamp).format("MMMM DD, YYYY");
}

export const timeAgo = (timestamp) => {
    return moment(timestamp).fromNow(true);
}