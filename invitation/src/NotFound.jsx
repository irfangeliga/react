import './assets/css/NotFound.css'
import './assets/js/NotFound.js'

const NotFound = ()=>{
    return(
        <>
            <div id="clouds">
                <div className="cloud x1"></div>
                <div className="cloud x1_5"></div>
                <div className="cloud x2"></div>
                <div className="cloud x3"></div>
                <div className="cloud x4"></div>
                <div className="cloud x5"></div>
            </div>
            <div className='c'>
                <div className='_404'>404</div>
                {/* <hr/> */}
                <div className='_1'>THE PAGE</div>
                <div className='_2'>WAS NOT FOUND</div>
                <a className='btn' href='#'>BACK TO HOME</a>
            </div>
        </>
    )
}

export default NotFound;