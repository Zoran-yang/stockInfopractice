import Paper from "@mui/material/Paper";

function FloatingWindow({ children, isOpen }) {
  return (
    <div>
      <Paper
        sx={
          isOpen
            ? {
                zIndex: "1000",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                minWidth: "450px",
                width: "65%",
              }
            : {
                display: "none",
              }
        }
      >
        {children}
      </Paper>
    </div>
  );
}

export default FloatingWindow;
