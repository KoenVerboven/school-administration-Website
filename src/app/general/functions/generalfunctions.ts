
class GeneralFunctions {

    GeneralFunctions() {}

    addHoursToDate(date: Date, hours: number) {
      date = new Date(date);
      const hoursToAdd = hours * 60 * 60 * 1000;
      date.setTime(date.getTime() + hoursToAdd);
      return date;
    }

}
export { GeneralFunctions };



