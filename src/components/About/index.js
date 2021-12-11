import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import useStyles from './styles';
import Profile2 from '../../assets/images/profile2.jpg';
import Bootstrap from '../../assets/images/bootstrap.svg';
import Css from '../../assets/images/css.svg';
import GraphQL from '../../assets/images/graphql.svg';
import Git from '../../assets/images/git.svg';
import Html from '../../assets/images/html.svg';
import Jquery from '../../assets/images/jquery.svg';
import Js from '../../assets/images/js.svg';
import MongoDB from '../../assets/images/mongo.svg';
import Mui from '../../assets/images/mui.svg';
import ReactIcon from '../../assets/images/react.svg';
import ResumePdf from '../../assets/files/resume.pdf';

const About = () => {
    const classes = useStyles();
    
    const skills = [
        {name: 'React', image: ReactIcon},
        {name: 'Html', image: Html},
        {name: 'Css', image: Css},
        {name: 'JavaScript', image: Js},
        {name: 'JQuery', image: Jquery},
        {name: 'Material-UI', image: Mui},
        {name: 'Bootstrap', image: Bootstrap},
        {name: 'MongoDB', image: MongoDB},
        {name: 'GraphQL', image: GraphQL},
        {name: 'Git', image: Git}
    ];

    return (
        <section className={`section border-top`} id='about'>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    About Me
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Know Me More
                </Typography>
            </Grid>
            <Box className={classes.aboutTextContainer_About}>
                <Typography className={classes.aboutText_About} variant='body1'>
                    <span className={classes.aboutTextSpan_About}> I am Xavy Romeo, a Full Stack Software Engineer </span>
                    with a degree in Business Economics from UC Irvine and a 
                    Full Stack Web Development certificate from UCLA
                    Extension Boot Camps. I can help visions and ideas come to life.                             
                </Typography>   
            </Box>
            <Grid container spacing={2}>
                <Grid item className={classes.imgSection_About} xs={12} lg={5}>
                    <Box className={classes.profileImgContainer_About}>
                        <img src={Profile2} className={classes.profileImg_About} height='100%' alt='Xavy Smiling!'/>
                    </Box>
                    <Grid container className={classes.linkContainer_About} direction='column' alignItems='center'>
                        <Box>
                            <a href='mailto:xavy.romeo.sse@gmail.com' className={classes.emailContainer_About}>
                                <Typography className={classes.emailTitle_About}>
                                    <MdEmail className={classes.emailIcon_About} />
                                    Email: 
                                </Typography>
                                <Typography className={classes.email_About} variant='body2'>
                                    Xavy.Romeo.SSE@gmail.com
                                </Typography>
                            </a>
                        </Box>
                        <Grid container justifyContent='center'>
                            <a href='https://github.com/Xavy-Romeo' target='_blank' rel='noopener noreferrer'>
                                <FaGithub className={classes.socialIcon_About} />
                            </a>
                            <a href='https://www.linkedin.com/in/xavy-romeo/' target='_blank' rel='noopener noreferrer'>
                                <FaLinkedin className={classes.socialIcon_About} />
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Typography className={`${classes.mySkillsTitle_About} text-theme`} variant='h5'>
                                My Skills
                            </Typography>
                            <Grid container className={`skills-bar-container`}>
                                {skills.map((skill, index) => (
                                    <Grid item xs={4} sm={2} key={index}>
                                        <Grid container className={classes.skillContainer_About} direction='column' alignItems='center'>
                                            <Box >
                                                <img 
                                                    src={skill.image} 
                                                    height='100%'
                                                    width='100%'
                                                    alt={skill.name} 
                                                />
                                            </Box>
                                            <Box>
                                                <Typography className={classes.skillName_About} variant='caption'>
                                                    {skill.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Box className={`${classes.downloadContainer_About} blink`}>
                            <Box>
                                <a 
                                    download='Resume - Javier Romeo Vazquez'
                                    href={ResumePdf}
                                    className={`${classes.downloadResumeLink_About} view-project-link`}
                                    aria-label='download resume button'
                                >
                                    <Typography className={classes.downloadResume_About} variant='body2'>
                                        Download My Resume
                                        <FiDownload className={classes.downloadIcon_About} />
                                    </Typography>
                                </a>
                            </Box>
                        </Box>    
                        <Grid container className={classes.experienceContainer_About}>
                            <Grid item xs={12} sm={6}>
                                <Grid container direction='column'>
                                    <Typography className={classes.aboutTitles_About} variant='subtitle1'>
                                        Education
                                    </Typography>
                                    <Box className={classes.aboutTitlesBorder_About} />
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Full Stack Web Development
                                        </Typography>
                                        <Typography variant='body2'>
                                            UCLA
                                        </Typography>
                                        <Typography variant='caption'>
                                            Certificate
                                        </Typography>
                                        <Typography variant='caption'>
                                            2021
                                        </Typography>
                                    </Grid>
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Business Economics
                                        </Typography>
                                        <Typography variant='body2'>
                                            UCI
                                        </Typography>
                                        <Typography variant='caption'>
                                            Bachelor's Degree
                                        </Typography>
                                        <Typography variant='caption'>
                                            2010
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container direction='column'>
                                    <Typography className={classes.aboutTitles_About} variant='subtitle1'>
                                        Work Experience
                                    </Typography>
                                    <Box className={classes.aboutTitlesBorder_About} />
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Accounts Payable - Leasing
                                        </Typography>
                                        <Typography variant='body2'>
                                            Forever 21 (Headquarters)
                                        </Typography>
                                        <Typography variant='caption'>
                                            Los Angeles, CA 
                                        </Typography>
                                        <Typography variant='caption'>
                                            Sep 2017 - Jan 2019
                                        </Typography>
                                    </Grid>
                                    <Grid container className={classes.experienceItem_About} direction='column'>
                                        <Typography className={classes.positionTitle_About} variant='body1'>
                                            Administrative Assistant
                                        </Typography>
                                        <Typography variant='body2'>
                                            BCBG Max Azria (Headquarters)
                                        </Typography>
                                        <Typography variant='caption'>
                                            Vernon, CA 
                                        </Typography>
                                        <Typography variant='caption'>
                                            Jul 2014 - Jul 2017
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    );
};

export default About;
