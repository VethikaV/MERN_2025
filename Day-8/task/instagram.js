// Function for liking the post
const likecode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Always succeeds
            if (success) {
                resolve("Liked the post successfully");
            } else {
                reject("Failed to like the post");
            }
        }, 5000);
    });
};

// Function for commenting on the post
const commentcode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Commented on the post successfully");
            } else {
                reject("Failed to comment on the post");
            }
        }, 5000);
    });
};

// Function for sharing the post
const sharecode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Shared the post successfully");
            } else {
                reject("Failed to share the post");
            }
        }, 5000);
    });
};

// Function for creating the post
const postcode = async () => {
    const post = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Post created successfully");
            } else {
                reject("Failed to create the post");
            }
        }, 5000);
    });

    try {
        const [pos, like, comment, share] = await Promise.all([
            post,
            likecode(),
            commentcode(),
            sharecode()
        ]);

        console.log(pos);
        console.log(like);
        console.log(comment);
        console.log(share);
    } catch (error) {
        console.error(error);
    }
};

postcode();