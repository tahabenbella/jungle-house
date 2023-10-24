import { useState } from 'react'
import '../styles/Footer.css'




function Footer() {
	const [inputValue, setInputValue] = useState('')

    function emailError(){
        !inputValue.includes('@') && alert("Error: no @ has been entered. This is not a valid email address." )
    }

	return (
		<footer className='jh-footer'>
			<div className='jh-footer-elem'>
			For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='jh-footer-elem'>Subscribe to our newsletter :</div>
            <div>
                <input
                    onBlur={() => emailError()}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
		</footer>
	)
}

export default Footer