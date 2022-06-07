const filterPosts = (posts, id, type) => {
  switch (type) {
    case "profile":
      return posts.filter(p => p.author.id === id);
    case "saved":
      return posts.filter(p => p.saved.find(savedId => savedId === id));
    case "liked":
      return posts.filter(p => p.likes.find(like => like.id === id));
    default:
      return [...posts].sort((a, b) => b.createdAt - a.createdAt);
  }
};

const getFeed = (posts, user) => {
  let myPosts = posts.filter(p => user.uid === p.author.id);
  let followerPosts = user?.following?.length ? posts.filter(p => user?.following?.find(f => f.id === p.author.id)) : [];
  return [...myPosts, ...followerPosts].sort((a, b) => b.createdAt - a.createdAt);
};

const filterPostsByChip = (posts, chip) => {
  switch (chip) {
    case "recent":
      return [...posts].sort((a, b) => b.createdAt - a.createdAt);
    case "trending":
      return [...posts].sort((a, b) => b.likes.length - a.likes.length);
    case "oldest":
      return [...posts].sort((a, b) => a.createdAt - b.createdAt);
    default:
      return posts;
  }
};

const getSuggestionsList = (allUsers, user, id) => {
  let suggestions = allUsers.filter(u => u.id !== id);
  suggestions = suggestions.filter(u => !user?.following?.find(p => p.id === u.id));
  return suggestions;
};
export { getSuggestionsList, filterPosts, filterPostsByChip, getFeed };
