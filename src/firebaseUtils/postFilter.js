const filterMyPosts = (posts, id, isProfilePage) => isProfilePage ? posts.filter(p => p.author.id === id) : posts;

export {filterMyPosts};