export const formatDate = (value) => {
    if (!value) {
        return "NA";
    }

    const dateValue = new Date(value);
    if (Number.isNaN(dateValue.getTime())) {
        return "NA";
    }

    return dateValue.toISOString().split("T")[0];
};