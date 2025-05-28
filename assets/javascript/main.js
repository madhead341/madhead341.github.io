const projectReadmes = {
    'Discord-RAT': `
# Discord RAT

A Discord-controlled remote administration tool to manage and control computers remotely through Discord bot commands.

## Features

### Screen & Display Management
- Take screenshots of specific monitors or all displays
- Real-time screen sharing to Discord voice channels
- Monitor detection and selection
- Periodic screenshot sharing

### File Management
- Browse directories and list files
- Upload files directly to Discord
- Download files from URLs
- Copy, delete, and manage files remotely

### System Information & Control
- Comprehensive system information (hardware, network, etc.)
- Remote shutdown, restart, and logoff capabilities
- Administrator privilege checking and elevation
- Execute shell commands remotely

### Audio & Voice Features
- Join Discord voice channels and stream microphone
- List and select audio input devices
- Real-time audio streaming

### Administrative Tools
- Toggle system features (UAC, Windows Defender, Firewall)
- Task Manager access control
- Process management and termination
- Startup program management

### Surveillance Capabilities
- Webcam access and photo capture
- Clipboard content monitoring
- Keylogger functionality with configurable intervals

### Credential Management
- Extract saved credentials from browsers (Chrome, Opera (GX), Edge and Firefox)
- Support for multiple credential storage services (Steam, EpicGames, Discord)
- Secure credential extraction

### Interactive Features
- Display custom message boxes on target system
- Open websites remotely
- Text-to-speech functionality
- Wallpaper modification
- Input device control (mouse/keyboard lock/unlock)
- Keyboard layout switching

## Installation

### Prerequisites
- Python 3.7 or higher
- Windows operating system
- Discord bot token

### Required Dependencies
\`\`\`
pip install discord.py
pip install psutil
pip install mss
pip install sounddevice
pip install numpy
pip install opencv-python
pip install pillow
pip install pyperclip
pip install keyboard
pip install requests
\`\`\`

### Setup
1. Clone or download the repository
2. Install all required dependencies using pip
3. Create a Discord bot and obtain the bot token
4. Replace \`YOUR_BOT_TOKEN_HERE\` with your actual bot token
5. Customize the command prefix if desired (default is \`!\`)
6. Run the script with appropriate permissions

## Configuration

### Basic Configuration
\`\`\`
TOKEN = 'YOUR_BOT_TOKEN_HERE'  # Replace with your Discord bot token
command_pref = '!'             # Command prefix (default: !)
\`\`\`

### Discord Bot Setup
1. Go to Discord Developer Portal
2. Create a new application and bot
3. Copy the bot token
4. Invite the bot to your server with appropriate permissions
5. Ensure the bot has permissions for:
- Send Messages
- Attach Files
- Connect to Voice Channels
- Speak in Voice Channels

## Command Reference

### Screen & Display Commands
- \`!screenshot [monitor_num]\` - Take screenshot of specific monitor or all
- \`!getmonitors\` - List all available monitors
- \`!screenshare <monitor_num> [voice_channel_id]\` - Start screen sharing
- \`!simpleshare <monitor_num> [interval]\` - Periodic screenshots

### File Management Commands
- \`!ls <directory>\` - List files in directory
- \`!file delete <path>\` - Delete file or folder
- \`!file upload <path>\` - Upload file to Discord
- \`!file get <url> <path>\` - Download file from URL
- \`!file copy <src> <dst>\` - Copy file or directory

### System Information Commands
- \`!info system\` - Display system information
- \`!info hardware\` - Show CPU, RAM, and disk information
- \`!info network\` - Display IP and network interface information
- \`!admincheck\` - Check administrator privileges

### System Control Commands
- \`!shutdown\` / \`!shutdown cancel\` - Shutdown system or cancel shutdown
- \`!restart\` - Restart the system
- \`!logoff\` - Log off current user
- \`!cmd <command>\` - Execute shell command

### Audio Commands
- \`!voice <channel_link>\` - Join voice channel and stream microphone
- \`!voice leave\` / \`!disconnect\` - Leave voice channel
- \`!audio\` - List available audio input devices
- \`!selectaudio <number>\` - Select audio input device
- \`!mute\` / \`!unmute\` - Mute or unmute microphone

### Administrative Commands (Requires Admin)
- \`!uac\` - Attempt to gain administrator privileges
- \`!disableuac\` - Disable User Account Control
- \`!disabledefender\` - Disable Windows Defender
- \`!disablefirewall\` - Disable Windows Firewall
- \`!disabletaskmgr\` / \`!enabletaskmgr\` - Toggle Task Manager access

### Surveillance Commands
- \`!getcams\` - List available webcams
- \`!selectcam <number>\` - Select webcam
- \`!webcampic\` - Take picture with selected webcam
- \`!clipboard\` - Get clipboard content
- \`!keylogger start\` / \`!keylogger stop\` - Control keylogger

### Process Management
- \`!tasklist\` - Show running processes
- \`!prockill <process_name>\` - Terminate a process

### Credential Commands
- \`!steal\` - List supported credential services
- \`!steal <service>\` - Extract credentials from specified service

### Interactive Commands
- \`!troll tts <message>\` - Text-to-speech output
- \`!troll bluescreen\` - Trigger blue screen effect
- \`!troll wallpaper <url>\` - Change desktop wallpaper
- \`!troll lock/unlock mouse\` - Control mouse access
- \`!troll lock/unlock keyboard\` - Control keyboard access
- \`!troll azerty/qwerty\` - Switch keyboard layout
- \`!troll revertall\` - Revert all modifications
- \`!message <text>\` - Display message box
- \`!website <url>\` - Open website in default browser

### Utility Commands
- \`!startup add/remove\` - Manage startup programs
- \`!uploadlink <url>\` - Download and process file from URL
- \`!exit\` - Terminate the RAT

## Usage Examples

### Taking a Screenshot
\`\`\`
!screenshot
!screenshot 1
\`\`\`

### File Operations
\`\`\`
!ls C:\Users
!file upload C:\document.txt
!file delete C:\temp\oldfile.txt
\`\`\`

### System Information
\`\`\`
!info system
!info hardware
!admincheck
\`\`\`

### Remote Control
\`\`\`
!shutdown
!restart
!cmd dir
\`\`\`

## DISCLAIMER

This tool is intended for legitimate system administration purposes only. Users are responsible for ensuring compliance with all applicable laws and regulations. Only use this software on systems you own or have explicit permission to access. The developers are not responsible for any misuse of this software. MIT License - see the [LICENSE](LICENSE) file for details.
`,

    'TaskHider': `
# TaskHider

A C++ tool that hides specific processes from the system process list by hooking into \`NtQuerySystemInformation\`.

## Overview

TaskHider allows processes to be hidden from the user and surveillance programs by intercepting system calls that enumerate running processes.

## Features

- **Process Hiding**: Hide any process by name or PID
- **System Hook**: Uses low-level Windows API hooking
- **Stealth Operation**: Operates without detection
- **Easy Launch**: Python launcher for simple execution

## Technical Details

- **Language**: C++ (core), Python (launcher, injector)
- **Platform**: Windows only
- **Method**: NtQuerySystemInformation hooking
- **Injection**: DLL injection technique

## Installation

\`\`\`
git clone https://github.com/madhead341/taskhider
cd taskhider
# Compile the C++ project
# Run launcher.py
\`\`\`

## Usage

1. Compile the C++ DLL
2. Run the Python launcher
3. Specify the process name to hide
4. The process will be hidden from Task Manager and other process viewers

## Warning

This tool modifies system behavior and should only be used for legitimate purposes such as security research or protecting critical processes.
`};

function parseMarkdown(text) {
    let lines = text.split('\n');
    let html = '';
    let inList = false;
    let listType = '';
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let trimmedLine = line.trim();
        
        if (trimmedLine.match(/^### /)) {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<h3>' + trimmedLine.replace(/^### /, '') + '</h3>';
        } else if (trimmedLine.match(/^## /)) {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<h2>' + trimmedLine.replace(/^## /, '') + '</h2>';
        } else if (trimmedLine.match(/^# /)) {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<h1>' + trimmedLine.replace(/^# /, '') + '</h1>';
        } 
        else if (trimmedLine.match(/^[\*\-] /)) {
            if (!inList || listType !== 'ul') {
                if (inList) html += `</${listType}>`;
                html += '<ul>';
                inList = true;
                listType = 'ul';
            }
            html += '<li>' + trimmedLine.replace(/^[\*\-] /, '') + '</li>';
        }
        else if (trimmedLine.match(/^\d+\. /)) {
            if (!inList || listType !== 'ol') {
                if (inList) html += `</${listType}>`;
                html += '<ol>';
                inList = true;
                listType = 'ol';
            }
            html += '<li>' + trimmedLine.replace(/^\d+\. /, '') + '</li>';
        }
        else if (trimmedLine.match(/^> /)) {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<blockquote>' + trimmedLine.replace(/^> /, '') + '</blockquote>';
        }
        else if (trimmedLine === '') {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<br>';
        }
        else if (trimmedLine !== '') {
            if (inList) { html += `</${listType}>`, inList = false; }
            html += '<p>' + trimmedLine + '</p>';
        }
    }
    
    if (inList) {
        html += `</${listType}>`;
    }

    html = html
        .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    return html;
}
function openModal(projectName) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const readmeContent = document.getElementById('readmeContent');
    
    modalTitle.textContent = `${projectName} - Details`;
    
    const markdownContent = projectReadmes[projectName] || '# No documentation available\n\nDocumentation for this project is coming soon.';
    
    const html = parseMarkdown(markdownContent);
    readmeContent.innerHTML = html;
    
    modal.style.display = 'block';
    modal.offsetHeight;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

const projects = [
{ repo: "madhead341/discord-RAT", cardId: "discord-rat", featured: true },
{ repo: "madhead341/taskhider", cardId: "taskhider", featured: true },
{ repo: "madhead341/losr-logger-v2", cardId: "loser-logger-v2" },
{ repo: "madhead341/keylogger", cardId: "keylogger", featured: true },
];

projects.forEach(project => {
    fetch(`https://api.github.com/repos/${project.repo}`)
        .then(res => res.json())
        .then(data => {
            const cardElement = document.querySelector(`#${project.cardId}`);
            
            if (project.featured) {
                cardElement.classList.add('featured');
            }
            
            document.querySelector(`#${project.cardId} .project-stars`).textContent = `⭐ ${data.stargazers_count}`;
            document.querySelector(`#${project.cardId} .project-language`).innerHTML = `
                <div class="language-dot ${data.language?.toLowerCase() || "unknown"}"></div>
                ${data.language || "Unknown"}
            `;
            document.querySelector(`#${project.cardId} .project-updated`).textContent =
                `Last update: ${new Date(data.updated_at).toLocaleDateString()}`;
        });
});

const userId = "1370479021883920606";
const apiKeys = [
  "738dbad9426ca82ac1c285f36de6d7c9",
  "8824fa5041d7a915cdae80442cb5f34f"
];
let keyIndex = 0;

function updateFavicon(avatarUrl) {
  const existingLink = document.querySelector("link[rel*='icon']");
  if (existingLink) {
    existingLink.remove();
  }
  
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = avatarUrl;
  document.head.appendChild(link);
}

async function fetchLanyardData(apiKey) {
  const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;
  try {
    const response = await fetch(apiUrl, {
      headers: { Authorization: apiKey }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error("Failed to fetch Lanyard data.");
    }

    const user = data.data?.discord_user;
    const activities = data.data?.activities || [];
    const status = data.data?.discord_status || 'offline';

    const statusColors = {
      online: "limegreen",
      idle: "orange",
      dnd: "red",
      offline: "gray"
    };

    if (user?.avatar) {
      const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
      document.getElementById("profilePic").src = avatarUrl;
      updateFavicon(avatarUrl);
    }

    document.getElementById("displayName").textContent =
      user?.display_name || user?.username || "! LO$R";

    document.getElementById("statusDot").style.backgroundColor =
      statusColors[status] || "gray";

    const spotify = activities.find(a => a.type === 2 && a.name === "Spotify");
    const otherActivity = activities.find(a => a.name !== "Custom Status" && a.name !== "Spotify");

    let statusText = "";

    if (spotify) {
      const trackName = spotify.details?.replace(/:[^:\s]*(?=:)|:[^:\s]*:/g, "").trim() || "Unknown Song";
      let artistNames = spotify.state?.replace(/:[^:\s]*(?=:)|:[^:\s]*:/g, "").trim() || "";
      artistNames = artistNames.replace(/;/g, ",");
      
      let trackLink = "";
      if (spotify.sync_id) {
        trackLink = `https://open.spotify.com/track/${spotify.sync_id}`;
      }

      document.getElementById("spotifyTrack").innerHTML = trackLink
        ? `<a href="${trackLink}" target="_blank" rel="noopener noreferrer" style="color: #1db954; text-decoration: none;">${trackName}</a>`
        : trackName;

      if (artistNames) {
        const artists = artistNames.split(",").map(a => a.trim()).filter(Boolean);
        const artistLinksHTML = artists.map(name => {
          const urlName = encodeURIComponent(name);
          return `<a href="https://open.spotify.com/search/${urlName}" target="_blank" rel="noopener noreferrer" style="color: #1db954; text-decoration: none;">${name}</a>`;
        }).join(", ");
        
        document.getElementById("spotifyArtist").innerHTML = `by ${artistLinksHTML}`;
      } else {
        document.getElementById("spotifyArtist").textContent = "";
      }
    } else {
      document.getElementById("spotifyTrack").textContent = "Not listening";
      document.getElementById("spotifyArtist").textContent = "";
    }

    if (otherActivity) {
      statusText = `Playing ${otherActivity.name}`;
    } else {
      statusText = status.charAt(0).toUpperCase() + status.slice(1);
    }

    document.getElementById("discordText").textContent = statusText;

  } catch (err) {
    console.error("Lanyard error:", err);
    
    document.getElementById("discordText").textContent = "Unable to load status";
    document.getElementById("spotifyTrack").textContent = "Error loading";
    document.getElementById("spotifyArtist").textContent = "";
    document.getElementById("statusDot").style.backgroundColor = "gray";
  }
}

fetchLanyardData(apiKeys[keyIndex]);

setInterval(() => {
  keyIndex = (keyIndex + 1) % apiKeys.length;
  fetchLanyardData(apiKeys[keyIndex]);
}, 3750);

const cursor = document.getElementById("cursor");
let isClicking = false;

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

function addShineEffect() {
    cursor.classList.add("shine");
    cursor.classList.add("clicking");
    isClicking = true;
    updateCursorAppearance();
    
    setTimeout(() => {
        cursor.classList.remove("shine");
    }, 600);
}

function removeClickEffect() {
    cursor.classList.remove("clicking");
    isClicking = false;
    updateCursorAppearance();
}

document.addEventListener("mousedown", addShineEffect);

document.addEventListener("mouseup", removeClickEffect);

document.addEventListener("mouseleave", () => {
    cursor.classList.remove("clicking", "shine");
    isClicking = false;
});

document.addEventListener("mouseenter", () => {
    if (!isClicking) {
        cursor.classList.remove("clicking", "shine");
    }
});

const interactiveElements = document.querySelectorAll('button, a, .project-link, .tech-item, .status-item, .profile-pic, .modal-close, [onclick]');

let isHovering = false;

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        isHovering = true;
        updateCursorAppearance();
    });
    
    element.addEventListener('mouseleave', () => {
        isHovering = false;
        updateCursorAppearance();
    });
});

function updateCursorAppearance() {
    if (isClicking) {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursor.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        cursor.style.borderColor = 'rgba(102, 126, 234, 0.6)';
    } else if (isHovering) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        cursor.style.borderColor = 'rgba(102, 126, 234, 0.8)';
    } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'linear-gradient(135deg, #4a5ba6, #3a4b96)';
        cursor.style.borderColor = 'rgba(102, 126, 234, 0.3)';
    }
}
