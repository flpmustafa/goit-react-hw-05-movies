import { ThreeCircles } from 'react-loader-spinner';
import css from 'components/Loader/Spinner.module.css';

const Spinner = () => { 
    return (
        <div className={css.loader}>
            <ThreeCircles
                height="100"
                color="rgb(240, 80, 0)"
                width="100"
                wrapperClass=""
                wrapperStyle={{}}
                ariaLabel="three-circles-rotating"
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
}

export default Spinner;