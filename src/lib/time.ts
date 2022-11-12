const units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: (24 * 60 * 60 * 1000 * 365) / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
} as const;

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const getRelativeTime = (d1: Date, d2 = new Date()): string => {
    const elapsed = d1.getTime() - d2.getTime();

    // "Math.abs" accounts for both "past" & "future" scenarios
    for (const u in units) {
        const unit = units[u as keyof typeof units];
        if (Math.abs(elapsed) > unit || u == 'second') {
            return rtf.format(Math.round(elapsed / unit), u as Intl.RelativeTimeFormatUnit);
        }
    }

    return rtf.format(Math.round(elapsed / units.second), 'second');
};
