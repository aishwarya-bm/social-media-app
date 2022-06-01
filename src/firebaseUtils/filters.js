const filterMyPosts = (posts, id, isProfilePage, isSavedPage, isLikedPage) => {
  if (isProfilePage) {
    return posts.filter(p => p.author.id === id);
  } else if (isSavedPage) {
    return posts.filter(p => p.saved.find(savedId => savedId === id));
  } else if (isLikedPage) {
    return posts.filter(p => p.likes.find(like => like.id === id));
  }
  return posts;
};

const getSuggestionsList = (allUsers, user,id) => {
  let suggestions = allUsers.filter(u => u.id !== id);
  suggestions = suggestions.filter(u => !user?.following?.find(p => p.id === u.id));
  return suggestions;
};
export { filterMyPosts, getSuggestionsList };
