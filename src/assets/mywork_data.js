import work1 from '../assets/work1.png'
import workout_tracker from '../assets/workout-tracker.png'
import github_icon from '../assets/github_icon.svg'

const mywork_data = [
    {
        w_no:1,
        w_name:"E-COMMERCE WEBSITE",
        w_img:work1,
        w_short_desc:"Full-stack e-commerce platform with secure payments and admin dashboard.",
        w_desc:"A full-stack e-commerce platform built with the MERN stack, featuring secure Stripe payment integration, dynamic product catalog, shopping cart functionality, and an intuitive admin dashboard for inventory management. Deployed on Render and Vercel for seamless performance.",
        w_tech:["React", "Node.js", "MongoDB", "Stripe"],
        w_github:"https://github.com/iankala/e-commerce-website",
        w_live:"https://e-commerce-frontend-five-virid.vercel.app/",
        w_icon: github_icon,
    },
    {
        w_no:2,
        w_name:"WORKOUT TRACKER",
        w_img:workout_tracker,
        w_short_desc:"Full-stack fitness tracking app with user authentication and modern UI.",
        w_desc:"A comprehensive workout tracking application built with the MERN stack, featuring secure JWT authentication, user-specific workout data management, real-time CRUD operations, and a modern glassmorphic UI design. The app includes exercise logging, load/reps tracking, and personalized workout history with smooth animations and responsive design. Deployed on Render (backend) and Vercel (frontend).",
        w_tech:["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
        w_github:"https://github.com/iankala/workout-tracker",
        w_live:"https://workout-tracker-indol-eight.vercel.app/",
        w_icon: github_icon,
    },
]
 
export default mywork_data;