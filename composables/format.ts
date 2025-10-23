export function formatDate(date: Date): string {
    date = new Date(date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) {
        return 'just now';
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours}h ago`;
    } else if (diffInDays < 7) {
        return `${diffInDays}d ago`;
    } else {
        const optionsThisYear: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        const optionsLastYear: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

        if (date.getFullYear() === now.getFullYear()) {
            return date.toLocaleDateString('en-US', optionsThisYear);
        } else {
            return date.toLocaleDateString('en-US', optionsLastYear);
        }
    }
}

export function formatDurationFromSeconds(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const paddedMins = hrs > 0 ? String(mins).padStart(2, '0') : String(mins);
    const paddedSecs = String(secs).padStart(2, '0');

    return hrs > 0
        ? `${hrs}:${paddedMins}:${paddedSecs}`
        : `${paddedMins}:${paddedSecs}`;
}
