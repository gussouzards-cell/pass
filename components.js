// Componente FluapInput
class FluapInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const type = this.getAttribute('type') || 'text';
        const placeholder = this.getAttribute('placeholder') || '';
        const required = this.hasAttribute('required');
        const value = this.getAttribute('value') || '';

        this.innerHTML = `
            <div class="fluap-input-wrapper">
                <input 
                    type="${type}" 
                    placeholder="${placeholder}"
                    value="${value}"
                    ${required ? 'required' : ''}
                    class="fluap-input"
                />
            </div>
        `;

        const input = this.querySelector('.fluap-input');
        
        // Adicionar estilos inline se necessário
        if (!document.querySelector('#fluap-input-styles')) {
            const style = document.createElement('style');
            style.id = 'fluap-input-styles';
            style.textContent = `
                .fluap-input-wrapper {
                    position: relative;
                }
                
                .fluap-input {
                    width: 100%;
                    padding: 14px 16px;
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius);
                    font-size: 16px;
                    font-family: 'Inter', sans-serif;
                    color: var(--text-primary);
                    background: var(--surface);
                    transition: all 0.2s;
                }
                
                .fluap-input:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
                }
                
                .fluap-input::placeholder {
                    color: var(--text-secondary);
                }
                
                .fluap-input:disabled {
                    background: var(--background);
                    cursor: not-allowed;
                    opacity: 0.6;
                }
            `;
            document.head.appendChild(style);
        }
    }

    get value() {
        return this.querySelector('.fluap-input')?.value || '';
    }

    set value(val) {
        const input = this.querySelector('.fluap-input');
        if (input) input.value = val;
    }
}

// Componente PermissionCard
class PermissionCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const appName = this.getAttribute('app-name') || '';
        const appIcon = this.getAttribute('app-icon') || '📱';
        const permission = this.getAttribute('permission') || '';
        const description = this.getAttribute('description') || '';
        const enabled = this.getAttribute('enabled') === 'true';

        this.innerHTML = `
            <div class="permission-card">
                <div class="permission-header">
                    <div class="permission-app">
                        <span class="app-icon">${appIcon}</span>
                        <div>
                            <h4 class="app-name">${appName}</h4>
                            <p class="permission-name">${permission}</p>
                        </div>
                    </div>
                    <label class="switch">
                        <input type="checkbox" ${enabled ? 'checked' : ''} onchange="this.closest('permission-card').togglePermission()">
                        <span class="slider"></span>
                    </label>
                </div>
                <p class="permission-description">${description}</p>
            </div>
        `;

        // Adicionar estilos
        if (!document.querySelector('#permission-card-styles')) {
            const style = document.createElement('style');
            style.id = 'permission-card-styles';
            style.textContent = `
                .permission-card {
                    padding: var(--spacing);
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius);
                    margin-bottom: 16px;
                    background: var(--surface);
                    transition: all 0.2s;
                }
                
                .permission-card:hover {
                    box-shadow: var(--shadow-sm);
                }
                
                .permission-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;
                }
                
                .permission-app {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                }
                
                .app-icon {
                    font-size: 32px;
                    line-height: 1;
                }
                
                .app-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 4px;
                }
                
                .permission-name {
                    font-size: 14px;
                    color: var(--text-secondary);
                    margin: 0;
                }
                
                .permission-description {
                    font-size: 14px;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }
                
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 48px;
                    height: 28px;
                }
                
                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }
                
                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: var(--border-color);
                    transition: 0.3s;
                    border-radius: 28px;
                }
                
                .slider:before {
                    position: absolute;
                    content: "";
                    height: 20px;
                    width: 20px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    transition: 0.3s;
                    border-radius: 50%;
                    box-shadow: var(--shadow-sm);
                }
                
                input:checked + .slider {
                    background-color: var(--primary-color);
                }
                
                input:checked + .slider:before {
                    transform: translateX(20px);
                }
            `;
            document.head.appendChild(style);
        }
    }

    togglePermission() {
        const checkbox = this.querySelector('input[type="checkbox"]');
        const isEnabled = checkbox.checked;
        console.log(`Permissão ${isEnabled ? 'ativada' : 'desativada'}`);
        // Aqui você pode adicionar lógica para salvar a preferência
    }
}

// Componente ConsentVersionCard
class ConsentVersionCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const version = this.getAttribute('version') || '';
        const date = this.getAttribute('date') || '';
        const changes = this.getAttribute('changes') || '';

        this.innerHTML = `
            <div class="consent-version-card">
                <div class="version-header">
                    <span class="version-number">Versão ${version}</span>
                    <span class="version-date">${date}</span>
                </div>
                <p class="version-changes">${changes}</p>
            </div>
        `;

        // Adicionar estilos
        if (!document.querySelector('#consent-version-card-styles')) {
            const style = document.createElement('style');
            style.id = 'consent-version-card-styles';
            style.textContent = `
                .consent-version-card {
                    padding: 16px;
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius);
                    margin-bottom: 12px;
                    background: var(--background);
                }
                
                .version-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px;
                }
                
                .version-number {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-primary);
                }
                
                .version-date {
                    font-size: 12px;
                    color: var(--text-secondary);
                }
                
                .version-changes {
                    font-size: 13px;
                    color: var(--text-secondary);
                    margin: 0;
                    line-height: 1.5;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Componente DeviceCard
class DeviceCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const deviceName = this.getAttribute('device-name') || '';
        const deviceType = this.getAttribute('device-type') || 'mobile';
        const location = this.getAttribute('location') || '';
        const lastActivity = this.getAttribute('last-activity') || '';
        const isCurrent = this.getAttribute('is-current') === 'true';

        const deviceIcons = {
            mobile: '📱',
            tablet: '📱',
            desktop: '💻'
        };

        const icon = deviceIcons[deviceType] || '📱';

        this.innerHTML = `
            <div class="device-card ${isCurrent ? 'current-device' : ''}">
                <div class="device-header">
                    <div class="device-info">
                        <span class="device-icon">${icon}</span>
                        <div>
                            <h4 class="device-name">
                                ${deviceName}
                                ${isCurrent ? '<span class="current-badge">Atual</span>' : ''}
                            </h4>
                            <p class="device-location">${location}</p>
                            <p class="device-activity">Última atividade: ${lastActivity}</p>
                        </div>
                    </div>
                </div>
                ${!isCurrent ? `
                    <button class="btn-device-logout" onclick="this.closest('device-card').logoutDevice()">
                        Deslogar
                    </button>
                ` : ''}
            </div>
        `;

        // Adicionar estilos
        if (!document.querySelector('#device-card-styles')) {
            const style = document.createElement('style');
            style.id = 'device-card-styles';
            style.textContent = `
                .device-card {
                    padding: var(--spacing);
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius);
                    margin-bottom: 16px;
                    background: var(--surface);
                }
                
                .device-card.current-device {
                    border-color: var(--primary-color);
                    background: rgba(0, 102, 255, 0.02);
                }
                
                .device-header {
                    margin-bottom: 12px;
                }
                
                .device-info {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }
                
                .device-icon {
                    font-size: 32px;
                    line-height: 1;
                }
                
                .device-name {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 4px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .current-badge {
                    font-size: 11px;
                    font-weight: 500;
                    padding: 3px 8px;
                    background: var(--primary-color);
                    color: white;
                    border-radius: 12px;
                }
                
                .device-location,
                .device-activity {
                    font-size: 13px;
                    color: var(--text-secondary);
                    margin: 2px 0;
                }
                
                .btn-device-logout {
                    width: 100%;
                    background: transparent;
                    color: var(--danger);
                    border: 1px solid var(--danger);
                    border-radius: var(--border-radius);
                    padding: 10px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .btn-device-logout:hover {
                    background: var(--danger);
                    color: white;
                }
            `;
            document.head.appendChild(style);
        }
    }

    logoutDevice() {
        const deviceName = this.getAttribute('device-name');
        if (confirm(`Tem certeza que deseja deslogar o dispositivo "${deviceName}"?`)) {
            this.remove();
            console.log(`Dispositivo ${deviceName} deslogado`);
            // Aqui você pode adicionar lógica para remover o dispositivo
        }
    }
}

// Registrar componentes customizados
customElements.define('fluap-input', FluapInput);
customElements.define('permission-card', PermissionCard);
customElements.define('consent-version-card', ConsentVersionCard);
customElements.define('device-card', DeviceCard);

