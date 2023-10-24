import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'



function CareScale({careType,scaleValue}) {

    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    function CareScaleClick(){
        alert(`This plant requires a ${(scaleValue === 1 ? 'small':(scaleValue === 2 ? 'meduim':'large'))} amount of ${careType}`)
    }    

    return (
    <div onClick={() => CareScaleClick()}>
        {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
    </div>)
}

export default CareScale