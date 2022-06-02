const filterPosts = (posts, id, type) => {
  switch (type) {
    case "profile":
      return posts.filter(p => p.author.id === id);
    case "saved":
      return posts.filter(p => p.saved.find(savedId => savedId === id));
    case "liked":
      return posts.filter(p => p.likes.find(like => like.id === id));
    default:
      return posts;
  }
};

const getSuggestionsList = (allUsers, user, id) => {
  let suggestions = allUsers.filter(u => u.id !== id);
  suggestions = suggestions.filter(u => !user?.following?.find(p => p.id === u.id));
  return suggestions;
};
export { getSuggestionsList, filterPosts };
