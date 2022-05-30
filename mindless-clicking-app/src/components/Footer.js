import React from 'react'

export default function Footer() {
    return (
        <>
            <footer style={{ position: 'absolute', bottom: 0 }}>
                <div className="copyright-notice">
                    <span>&copy; </span>
                    <span property="dc:date" datatype="xsd:gYear">
                        2022
                    </span>
                    <span> mindlessClicking. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

