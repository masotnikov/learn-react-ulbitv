import classes from '/MyModal.module.css'

const MyModal = ({children}) => {
  return (
    <div className={[classes.myModal, classes.active].join(' ')}>
      <div className={classes.myModalContent}></div>
      {children}
    </div>
  )
}

export default MyModal;