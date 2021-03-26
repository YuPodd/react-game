export default function ComputerButton({computer, computerImage}){
    return(
        <button
            type="button"
            value={computer}
            className="computer_button btn btn-outline-info"
          >
            <img className={computer} src={computerImage} alt={computer} />
          </button>
    )
}