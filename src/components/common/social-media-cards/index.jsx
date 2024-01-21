function SocialMediaCards( {path, Icon}) {
    return (
        <div className="flex justify-center mt-5">
            <a href={path} target="_blank">
                <Icon className="w-[50px] flex h-8 text-peachYellow" />
            </a>
        </div>
    )
}

export default SocialMediaCards