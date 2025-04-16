



const TermCondition = () => {


    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-gray-300">

                <div className="w-full h-full bg-white  shadow-xl flex-col justify-around gap-[50px] p-14 rounded-2xl">
                    <div className="flex flex-col justify-center items-center mb-0.5">
                        <img
                            src="/images/KCERA.png"
                            alt="KCERA Logo"
                            className="min-h-15 max-h-20 w-auto"
                        />
                    </div>
                    <h1 className="text-center"><b> Terms and Condition</b></h1><br />
                    <p className="text-justify leading-relaxed ">
                        By using the Kabankalan City Emergency Response Application (KCERA), you agree to the following terms: KCERA is designed to help residents of Kabankalan City report emergencies in real time, notify emergency responders, and track the status of reports. You agree to provide accurate information and not misuse the app for false reports or spam. Your personal data, such as your name, contact information, and location, will only be used for emergency response purposes and will not be shared with third parties unless required by law or necessary to save lives. The developers and administrators of KCERA are not liable for delays or failures in response caused by factors such as poor internet connectivity or power interruptions. The app goal is not to replace emergency hotlines; users can still send emergency reports by calling the city's emergency hotlines. Dispatchers are responsible for responding to reports, verifying emergencies, posting announcements, and issuing summons within the app. Abuse of administrative privileges may lead to disciplinary action. By using this app, you also consent to receive notifications related to emergency updates, summons, announcements, and report statuses. KCERA may update these terms at any time, and users will be informed of major changes through in-app notifications. For concerns or clarifications, users are encouraged to contact the KCERA development team. By continuing to use the app, you acknowledge that you have read, understood, and accepted these terms and conditions.
                    </p>

                    <div className="w-full h-[70px] flex justify-end items-center">
                        <a href="./Registration" className="text-blue-500 transform translate-x-0">Back to Registration</a>
                    </div>
                </div>


            </div>
        </>
    )

}

export default TermCondition