import React, { useState,FC } from "react";
import { QrCodeReader } from "./QrCodeReader";

const QrCodeResult: FC<{qrCodes: string[] }> = ({qrCodes}: {qrCodes:string[]}) => {
	return <>
		{qrCodes.map((qr,i) =><React.Fragment key={i}><div>{qr}</div></React.Fragment>)}
	</>
  }
  
export   const TodoList = () => {
	const [qrCodes, setQrCodes] = useState<string[]>([])
  
	return <>			<QrCodeReader onReadQRCode={(result) => {
			  setQrCodes((codes) => {
				return [result.getText(), ...codes]
			  })
			}}/>
		  
			<QrCodeResult qrCodes={qrCodes}/></>
  }