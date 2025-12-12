# Script para configurar Git no projeto FLUAP PASS
$projectPath = "C:\Users\Saba\Desktop\Fluap ideaçãos\fluap-pass"

# Navegar para o diretório do projeto
Set-Location $projectPath

# Inicializar repositório Git se não existir
if (-not (Test-Path .git)) {
    Write-Host "Inicializando repositório Git..."
    git init
}

# Configurar remote
Write-Host "Configurando remote..."
git remote remove origin 2>$null
git remote add origin https://github.com/gussouzards-cell/pass.git

# Adicionar arquivos
Write-Host "Adicionando arquivos..."
git add index.html styles.css components.js script.js README.md .gitignore

# Fazer commit
Write-Host "Fazendo commit..."
git commit -m "Initial commit: FLUAP PASS - Módulo de Identidade Digital"

# Mostrar status
Write-Host "`nStatus do repositório:"
git status

Write-Host "`nPara fazer push, execute:"
Write-Host "git push -u origin master"
Write-Host "ou"
Write-Host "git push -u origin main"

