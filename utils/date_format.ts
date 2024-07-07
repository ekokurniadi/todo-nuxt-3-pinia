export const formatDateToIndonesian = (date: Date | string | number): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

    };

    const formatter = new Intl.DateTimeFormat('id-ID', options);
    const parts = formatter.formatToParts(new Date(date));

    const day = parts.find(part => part.type === 'day')?.value || '';
    const month = parts.find(part => part.type === 'month')?.value || '';
    const year = parts.find(part => part.type === 'year')?.value || '';
    const hour = parts.find(part => part.type === 'hour')?.value || '';
    const minute = parts.find(part => part.type === 'minute')?.value || '';
    const second = parts.find(part => part.type === 'second')?.value || '';

    return `${day} ${month} ${year} ${hour}:${minute}:${second}`;
};
