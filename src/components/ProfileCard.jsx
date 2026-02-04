function ProfileCard({ name, bio, imageUrl, links }) {
    return (
        <div className="w-80 p-6 shadow-lg rounded-xl bg-white text-center hover:shadow-xl transition-shadow">
            <img 
            src={imageUrl} 
            alt={name} 
            className="w-24 h-24 rounded-full mx-auto shadow-lg"
            />
            <h2 className="mt-4 text-xl font-semibold">{name}</h2>
            <p className="mt-2 text-gray-600">{bio}</p>
            <div className="mt-4 flex justify-center gap-4">
                {links.map((link) => (
                    <a 
                    key={link.label} 
                    href={link.url}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProfileCard