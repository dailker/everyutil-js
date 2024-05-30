/**
 * Heuristically checks if code is running in a virtual machine/sandbox.
 *
 * @author @dailker
 * @returns {Promise<boolean>} True if running in a VM/sandbox.
 */
export async function isRunningInVM(): Promise<boolean> {
    const fs = require('fs');
    try {
        if (fs.existsSync('/.dockerenv') || fs.existsSync('/.containerenv')) return true;
        const cgroup = fs.readFileSync('/proc/1/cgroup', 'utf8');
        if (/docker|lxc|kubepods|containerd/.test(cgroup)) return true;
    } catch {}
    return false;
}
