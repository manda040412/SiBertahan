<template>
  <div class="services font-bahnschrift hide-scrollbar bg-gradient-to-t from-[#D9E5F5] to-white min-h-screen">
    <!-- Hero Section -->
    <div class="container px-12 mx-auto">
      <div class="relative">
        <div class="col-md-12">
            <div>
                <h1 class="text-center font-bold py-28 text-8xl">SIBER<span class="text-red-500">SERANG</span></h1>
            </div>
            <div class="absolute -left-[300px] top-[13%] -translate-y-1/2 flex flex-col">
                <img src="../assets/line dot.png" alt="" class="w-[600px] h-auto">
            </div>
        </div>
        <div class="flex grid grid-cols-2">
            <div class="">
                <p class="text-blue-400 text-2xl tracking-wider font-medium underline underline-offset-[15px] mb-4 text-start">
                    WHAT WE DO
                </p>
                <h1 class="text-start py-20 text-8xl">SIBER<span class="text-red-500">SERANG</span></h1>
                <P class="text-2xl"> Siberserang is our suite of offensive cybersecurity 
services. It encompass proactive and controlled 
simulated attack on computer systems, networks, and 
applications. Our ethical penetration testers conduct 
these assessments to identify vulnerabilities and 
weaknesses, providing valueable insights for your 
organization to fortify defenses, safeguard data, and 
mitigate potential real-world cyber threats.</P>

                <p class="text-blue-400 text-2xl py-12 tracking-wider font-medium underline underline-offset-[15px] mb-1 text-start">
                    SERVICE
                </p>
                <div class="flex flex-col gap-4 justify-start items-start">
                    <div class="p-4 bg-blue-500 text-white rounded-xl" >
                        1. PENETRATION TESTING
                    </div>
                    <div class="p-4 bg-blue-500 text-white rounded-xl">
                        2. RED TEAMING
                    </div>
                    <div class="p-4 bg-blue-500 text-white rounded-xl">
                        3. ADVERSARY EMULATION
                    </div>
                    
                </div>
            </div>
            <div class=" ml-0 relative overflow-visible w-full">
                <img src="../assets/SIBERSERANG-03.png" alt="" style="width: 1000px; max-width: none;" class="h-auto absolute -top-[100px] -left-[-100px] z-10">
            </div>
        </div>
      </div>
    </div>
    <div class="container py-2 px-12 pr-24 flex flex-col gap-12 justify-center items-center mx-auto">
      <div>
        <img src="../assets/Asset 1.png" alt="" class="w-[110px] h-auto absolute -bottom-[2100px] -right-[0px]">
      </div>
      <div class="py-2 pl-24">
        <!-- Keeping this image exactly as requested -->
        <img src="../assets/SIBERSERANG-02.png" alt="" class="w-[640px] h-auto absolute -bottom-[1500px] -left-[300px] opacity-80">
      </div>
      <div class="py-2 pl-24">
        <!-- Keeping this image exactly as requested -->
        <img src="../assets/SIBERSERANG-02.png" alt="" class="w-[640px] h-auto absolute -bottom-[3500px] -right-[300px] opacity-80">
      </div>
    </div>

    <!-- Adding the Security Hardening Assessment section -->
    <div class="container py-1 px-12 mx-auto relative">
      <!-- Section Heading -->
      <h2 class="text-2xl font-bold text-blue-500 mb-4">1. PENETRATION TESTING</h2>
      
      <!-- Introduction -->
      <div class="mb-8 max-w-4xl">
        <p class="text-gray-700 mb-4">
          Also known as “pentesting,” it is a controlled and simulated attack on a computer system, network, application, 
or infrastructure to identify vulnerabilities and weaknesses that could potentially be exploited by malicious 
hackers. The goal of penetration testing is to evaluate the security posture of the target system and provide 
insights into areas that need improvement.
        </p>
        <p class="text-gray-700 mb-6">
          Our approach at sibertahan involves the following activities.
        </p>
      </div>
      
      <!-- Penetration Testing Steps -->
        <div class="ml-4 space-y-6 max-w-4xl">

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">1.</div>
            <div>
            <h3 class="font-bold mb-2">Planning and Scoping:</h3>
            <p class="text-gray-700">
                This involves defining the scope of the penetration test, including the systems, applications, and networks to be tested, as well as the goals and objectives of the test. It’s important to communicate with the organization being tested to ensure that the test does not disrupt normal operations.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">2.</div>
            <div>
            <h3 class="font-bold mb-2">Reconnaissance:</h3>
            <p>
                This phase involves gathering information about the target, such as IP addresses, domain names, and other publicly available information. This information helps the penetration tester understand the target’s attack surface and potential entry points.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">3.</div>
            <div>
            <h3 class="font-bold mb-2">Vulnerability Assessment:</h3>
            <p class="text-gray-700">
                The penetration tester uses various tools and techniques to identify vulnerabilities in the target systems. These vulnerabilities could include outdated software, misconfigured security settings, or other weaknesses that could be exploited.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">4.</div>
            <div>
            <h3 class="font-bold mb-2">Exploitation:</h3>
            <p class="text-gray-700">
                In this phase, the tester attempts to exploit the identified vulnerabilities to gain unauthorized access to the target system. The goal is to demonstrate what a real attacker could achieve by exploiting these vulnerabilities.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">5.</div>
            <div>
            <h3 class="font-bold mb-2">Post-Exploitation:</h3>
            <p class="text-gray-700">
                If the penetration tester successfully gains access, they may perform additional actions to demonstrate the potential impact of a breach. This might include escalating privileges, accessing sensitive data, or even establishing persistent access.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">6.</div>
            <div>
            <h3 class="font-bold mb-2">Analysis and Reporting:</h3>
            <p class="text-gray-700">
                After the testing is complete, the penetration tester compiles a detailed report that outlines the vulnerabilities that were identified, the methods used to exploit them, and the potential impact of a successful attack. This report also provides recommendations for mitigating the identified vulnerabilities and improving overall security.
            </p>
            </div>
        </div>

        <div class="flex gap-4">
            <div class="font-bold min-w-[24px]">7.</div>
            <div>
            <h3 class="font-bold mb-2">Remediation:</h3>
            <p class="text-gray-700">
                The organization’s security team uses the findings from the penetration test to address the vulnerabilities and weaknesses that were identified. This might involve applying patches, reconfiguring security settings, or implementing additional security measures.
            </p>
            </div>
        </div>
        </div>

        <!-- Penetration Testing Conclusion -->
        <div class="mt-8 max-w-4xl">
        <p class="text-gray-700">
            Penetration testing is a critical component of an organization’s overall cybersecurity strategy. It helps identify and address vulnerabilities before malicious hackers can exploit them, thereby reducing the risk of a successful cyberattack. Additionally, penetration testing provides valuable insights into the effectiveness of an organization’s security controls and helps improve incident response procedures.
        </p>
        </div>
    </div>

    <!-- Red Teaming Section -->
    <div class="container py-15 px-12 mx-auto relative mt-16">
    <!-- Section Heading -->
    <h2 class="text-2xl font-bold text-blue-500 mb-4">2. RED TEAMING</h2>

    <!-- Introduction -->
    <div class="mb-8 max-w-4xl">
        <p class="text-gray-700 mb-4">
        Red Teaming is an advanced form of cybersecurity assessment that goes beyond traditional penetration testing.
        It involves simulating real-world attacks to evaluate the effectiveness of an organization’s security measures,
        processes, and people. Red Teaming aims to provide a holistic view of an organization’s ability to detect,
        respond to, and mitigate sophisticated and targeted cyber threats.
        </p>
        <p class="text-gray-700 mb-6">
        At sibertahan, our Red Teaming service has the following characteristics:
        </p>
    </div>

    <!-- Red Teaming Characteristics -->
    <div class="ml-4 space-y-6 max-w-4xl">

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">1.</div>
        <div>
            <h3 class="font-bold mb-1">Realistic Simulation:</h3>
            <p class="text-gray-700">
            Red Teaming involves simulating complex and multifaceted attack scenarios that closely mimic the tactics,
            techniques, and procedures (TTPs) used by actual threat actors. This approach helps organizations
            understand their vulnerabilities and weaknesses in a more comprehensive manner.<br />
            <strong>Adversarial Mindset:</strong> Red Teamers adopt an adversarial mindset, thinking and acting like real attackers.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">2.</div>
        <div>
            <p class="text-gray-700">
            They use a combination of technical expertise, social engineering, and other creative tactics to achieve
            their objectives, just as real cybercriminals would.<br />
            <strong>Comprehensive Assessment:</strong> Red Teaming goes beyond just technical vulnerabilities. It assesses the
            entire cybersecurity ecosystem, including technology, personnel, physical security, processes, and even
            the organization’s ability to detect and respond to threats.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">3.</div>
        <div>
            <h3 class="font-bold mb-1">Scenario-Based Approach:</h3>
            <p class="text-gray-700">
            Red Teams often work on extended engagements that involve multifaceted scenarios. For example, they might
            attempt to breach an organization’s defenses, move laterally within the network, and attempt to exfiltrate
            sensitive data, all while evading detection.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">4.</div>
        <div>
            <h3 class="font-bold mb-1">Collaboration:</h3>
            <p class="text-gray-700">
            Red Teaming typically involves close collaboration between the organization’s internal security team and
            the external Red Team. This collaboration helps in understanding the organization’s security landscape and
            ensures that the test aligns with the organization’s goals.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">5.</div>
        <div>
            <h3 class="font-bold mb-1">Reporting and Recommendations:</h3>
            <p class="text-gray-700">
            Like traditional penetration testing, Red Teaming concludes with a comprehensive report that outlines the
            techniques used, the vulnerabilities exploited, and the potential impact of the simulated attacks.
            Additionally, the report provides actionable recommendations to enhance the organization’s security posture.
            </p>
        </div>
        </div>
    </div>

    <!-- Red Teaming Conclusion -->
    <div class="mt-8 max-w-4xl">
        <p class="text-gray-700">
        Red Teaming is especially valuable for organizations seeking to assess their security preparedness against
        sophisticated and targeted cyber threats, including advanced persistent threats (APTs) and nation-state actors.
        It helps organizations identify gaps in their security strategy, incident response capabilities, and employee
        training. By subjecting the organization to realistic and challenging scenarios, Red Teaming assists in building
        a more robust and resilient cybersecurity framework.
        </p>
    </div>
    </div>

    <!-- Adversary Emulation Section -->
    <div class="container py-20 px-12 mt-[-20px] mx-auto relative mt-16">
    <!-- Section Heading -->
    <h2 class="text-2xl font-bold text-blue-500 mb-4">3. ADVERSARY EMULATION</h2>

    <!-- Intro -->
    <div class="mb-8 max-w-4xl">
        <p class="text-gray-700 mb-4">
        Adversary Emulation, also known as Purple Teaming, is a cybersecurity practice that involves simulating the
        tactics, techniques, and procedures (TTPs) of specific threat actors or attack groups in order to assess an
        organization’s ability to detect, respond to, and defend against those specific threats. This approach helps
        organizations enhance their threat detection and incident response capabilities by testing them against
        realistic attack scenarios.
        </p>
        <p class="text-gray-700 mb-6">
        At sibertahan, our approach to Adversary Emulation includes:
        </p>
    </div>

    <!-- List of Characteristics -->
    <div class="ml-4 space-y-6 max-w-4xl">

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">1.</div>
        <div>
            <h3 class="font-bold mb-1">Specific Threat Models:</h3>
            <p class="text-gray-700">
            Adversary emulation focuses on emulating the behaviors and strategies of known threat actors or attack groups.
            These could be threat actors associated with certain nation-states, cybercriminal organizations, or other
            identifiable groups with distinct attack patterns.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">2.</div>
        <div>
            <h3 class="font-bold mb-1">Realistic Scenarios:</h3>
            <p class="text-gray-700">
            The practice involves creating scenarios that closely mimic the tactics, techniques, and procedures of the
            selected threat actors. This might involve using the same tools, methods, and entry points that the real threat
            actors use.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">3.</div>
        <div>
            <h3 class="font-bold mb-1">Collaboration:</h3>
            <p class="text-gray-700">
            Adversary emulation requires collaboration between the organization’s internal security team and external
            experts who have deep knowledge of the targeted threat actors. This collaboration ensures that the simulated
            attacks are accurate and representative of the real-world threats.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">4.</div>
        <div>
            <h3 class="font-bold mb-1">Testing Detection and Response:</h3>
            <p class="text-gray-700">
            The primary goal of adversary emulation is to test an organization’s capabilities in detecting, analyzing,
            and responding to the specific threats being emulated. This includes evaluating the effectiveness of security
            monitoring, incident response procedures, and overall security controls.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">5.</div>
        <div>
            <h3 class="font-bold mb-1">Improvement and Training:</h3>
            <p class="text-gray-700">
            The insights gained from adversary emulation help organizations identify gaps in their security strategy and
            operations. By detecting and addressing weaknesses in a controlled environment, organizations can better
            prepare for real-world attacks and continuously improve their security posture.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">6.</div>
        <div>
            <h3 class="font-bold mb-1">Scenario Complexity:</h3>
            <p class="text-gray-700">
            Emulated scenarios can range in complexity, from simple attack patterns to more advanced and multifaceted
            attack campaigns. This allows organizations to evaluate their defenses against a variety of potential threat
            scenarios.
            </p>
        </div>
        </div>

        <div class="flex gap-4">
        <div class="font-bold min-w-[24px]">7.</div>
        <div>
            <h3 class="font-bold mb-1">Actionable Recommendations:</h3>
            <p class="text-gray-700">
            The results of an adversary emulation exercise are typically documented in a detailed report. This report
            outlines the techniques used, vulnerabilities exploited, and areas for improvement. It provides actionable
            recommendations to strengthen the organization’s security posture.
            </p>
        </div>
        </div>

    </div>

    <!-- Conclusion -->
    <div class="mt-8 max-w-4xl">
        <p class="text-gray-700">
        Adversary emulation helps organizations move beyond generic security assessments and tailor their defenses
        to the specific threats that are most relevant to their industry, region, or business model. By focusing on these
        specific threats, organizations can allocate resources more effectively and better prepare for targeted
        cyberattacks.
        </p>
    </div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for modern browsers */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* Global styles to hide scrollbars */
:global(html),
:global(body) {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  overflow-x: hidden;
}
:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  width: 0;
  display: none;  /* Chrome, Safari and Opera */
}
</style> 