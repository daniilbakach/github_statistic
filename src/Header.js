import './Header.scss';

export default function Header(){
    return(
        <div className='header'>
            <div>Search by: </div>
            <ul className='header__items'>
                <li className='header_item'>
                    <a href='#'>Users</a>
                </li>
                <li className='header__item'>
                    <a href='#'>Repos</a>
                </li>
            </ul>
        </div>
    );
}