import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    sectionTitleContainer: {
        position: 'relative'
    },
    sectionTitleShadow: {
        fontFamily: 'Londrina Outline, cursive',
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontSize: '120px',
        textShadow: '10px 10px 5px rgb(220,220,220)',
        opacity: '5%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    sectionTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        fontWeight: '600',
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    testimonialContainer_Testimonials: {
        borderRadius: '15px', 
        height: '100%', 
        width: '100%', 
        padding: '5% 0', 
        background: 'linear-gradient(145deg,rgb(225,235,235),rgb(245,255,255))', 
        boxShadow: '5px 5px 15px rgb(209,217,230),-5px -5px 15px rgb(245,255,255)',
        padding: '40px'
    },
    quoteIcon_Testimonials: {
        fontSize: '40px', 
        color: 'rgb(246,79,89)'
    },
    quoteText_Testimonials: {
        color: 'rgba(40,40,40,.7)',
        minHeight: '220px',
        margin: '20px 0'
    },
    imgBox_Testimonials: {
        height: '60px'
    },
    img_Testimonials: {
        borderRadius: '50%',
        border: '2px solid rgb(246,79,89)'
    },
    nameContainer_Testimonials: {
        marginLeft: '10px'
    },
    name_Testimonials: {
        fontWeight: '500'
    }
}));

export default useStyles;