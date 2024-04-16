export function formatToTimeAgo(publishedAtStr) {
  const publishedAt = new Date(publishedAtStr);
  const timeDiffInMilliseconds = Date.now() - publishedAt.getTime();

  // Convert milliseconds to hours
  const timeDiffInHours = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60));

  // Format the time difference based on hours, days, weeks, etc.
  if (timeDiffInHours < 1) {
    const timeDiffInMinutes = Math.floor(timeDiffInMilliseconds / (1000 * 60));
    return `${timeDiffInMinutes} minutes ago`;
  } else if (timeDiffInHours < 24) {
    return `${timeDiffInHours} hours ago`;
  } else {
    const timeDiffInDays = Math.floor(timeDiffInHours / 24);
    return `${timeDiffInDays} days ago`;
  }
}

// Function to truncate title to 80 characters
export function truncateTitle(title, maxLength) {
  if (title.length <= maxLength)
    return title;
  return title.slice(0, maxLength) + '...';
}


export function formatViewCount(viewCount) {
  if (viewCount >= 1000000) {
    // Convert to millions with one decimal place
    return `${(viewCount / 1000000).toFixed(1)}M`;
  } else if (viewCount >= 1000) {
    // Convert to thousands
    return `${Math.floor(viewCount / 1000)}K`;
  } else {
    // For numbers less than 1000, return the original number
    return `${viewCount}`;
  }
}
