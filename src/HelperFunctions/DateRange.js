export default class DateRange {

    static mergeRanges(list) {
        let newList = [];
        list.forEach(function (a) {
            let lastItme = newList.pop();

            // if the the list is empty, then just push a
            if (lastItme === undefined) {
                newList.push(a)

                // if the the end of last item ends before the start of a, then just push the popped item and then push a
            } else if (lastItme.end - a.start < -1*(86400000)) {
                newList.push(lastItme)
                newList.push(a)

                // else, means there is overlap and adjust the end of the popped item end and push it back.
            } else {
                lastItme.end = (lastItme.end - a.end < 0) ? a.end : lastItme.end
                newList.push(lastItme)
            }
        })
        return newList;
    }
}