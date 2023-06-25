function Header() {
    return (

        <>
            <h1 className={'text-xl font-bold text-white  cursor-pointer'} >Logo</h1>
            <ul className={'flex space-x-6'}>
                <li className={'text-sm font-bold text-white cursor-pointer'}>
                    Home
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    Contact
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    Profile
                </li>
            </ul>
        </>
    )
}
export default Header