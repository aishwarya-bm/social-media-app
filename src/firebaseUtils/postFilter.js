const filterMyPosts = (posts, id, isProfilePage, isSavedPage) => {
  if (isProfilePage) {
    return posts.filter(p => p.author.id === id);
  } else if (isSavedPage) {
    return posts.filter(p => p.saved.find(savedId => savedId === id));
  }
  return posts;
};

export { filterMyPosts };
