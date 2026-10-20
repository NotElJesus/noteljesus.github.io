const profilePicture = document.querySelector(".profile-picture");

if (profilePicture) {
    const month = new Date().getMonth() + 1;

    const seasonalPictures = {
        10: "/assets/images/profiles/pfpOctober.png",
        11: "/assets/images/profiles/pfpNovember.png",
        12: "/assets/images/profiles/pfpDecember.png"
    };

    profilePicture.src = seasonalPictures[month] ?? "/assets/images/profiles/profile.png";
}