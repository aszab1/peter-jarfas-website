import { motion } from 'framer-motion'
import podiumboy from '../assets/images/podiumboy.jpg'

export default function Students() {
  return (
    <motion.div layoutId="nav-item">
      <h4>Students Component</h4>
      <img src={podiumboy} alt="" />
    </motion.div>
  );
}